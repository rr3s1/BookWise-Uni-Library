"use client";

import React, {useRef, useState} from "react";
import {toast} from "@/hooks/use-toast";
import { IKContext, IKUpload, IKImage } from "imagekitio-react";
import config from "@/lib/config";
import Image from "next/image";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    // Ensure config.env.apiEndpoint is correctly defined and accessible
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
          `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };


  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};




const ImageUpload = ({onFileChange}: {
  onFileChange: (filePath: string) => void;
}) => {

  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string} | null >(null);

  const onError = (error: any) => {
    console.error("ImageKit Upload Error:", error); // Log the error for debugging
      toast({
          title: `Image upload failed`,
          description: `Your image could not be uploaded. Please try again. Error: ${error?.message || 'Unknown error'}`, // Provide more error context if possible
          variant: "destructive",
      });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath); // Call the form's onChange handler
    toast({ // Display success toast
        title: "Image uploaded successfully",
        description: `${res.filePath} uploaded.`, // Keep description concise
    });
  };


  return (
      // Make sure publicKey and urlEndpoint are correctly passed
      <IKContext
          publicKey={publicKey}
          urlEndpoint={urlEndpoint}
          authenticator={authenticator}
      >
        <IKUpload
            className="hidden" // Keep it hidden
            ref={ikUploadRef} // Assign the ref
            onError={onError} // Pass error handler
            onSuccess={onSuccess} // Pass success handler
            fileName="university-id-upload" // Use a more descriptive default filename if needed
            useUniqueFileName={true} // Recommended for avoiding overwrites
            folder="/ids" // Specify upload folder if desired
            // Consider adding inputProps for accessibility if needed indirectly
        />
    
        <button
            type="button" // Ensure it's not treated as a submit button if inside a form
            className="upload-btn" // Apply custom styling
            onClick={(e) => {
              e.preventDefault(); // Prevent default only if necessary (e.g., if it's somehow submitting)
              if (ikUploadRef.current) {
                // @ts-ignore - Suppress TS error if type inference is problematic
                ikUploadRef.current?.click(); // Trigger click on the hidden input
              }
            }}
        >
          <Image
              src="src=/public/icons/upload.svg" // Use a more descriptive path if possible
              alt="upload-icon"
              width={20}
              height={20}
              className="object-contain" // Style the icon
          />

          <p className="text-base text-light-100">Upload A File</p> {/* More specific text */}

          {/* Display filename if uploaded */}
          {file && (
              <p className="upload-filename truncate text-xs mt-1">{file.filePath.split('/').pop()}</p> // Show only filename, truncated
          )}
        </button>

        {/* Conditionally render the uploaded image preview */}
        {file &&
           (
                <div className="mt-4 w-full max-w-xs mx-auto"> {/* Add some spacing and constraints */}
                    <IKImage
                        alt="Uploaded University ID Preview" // Descriptive alt text
                        path={file.filePath} // Use the path from state
                        width={500} // Use consistent width/height or aspect ratio
                        height={300}
                        lqip={{ active: true }} // Add Low Quality Image Placeholder for better UX
                        className="rounded border border-gray-300" // Add some basic styling
                    />
                </div>
            )}
      </IKContext>
  );
}; 

export default ImageUpload; 