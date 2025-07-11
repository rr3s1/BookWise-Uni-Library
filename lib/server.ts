/**
 * Server-side utility functions
 */

/**
 * Executes a callback function after the current function completes
 * @param callback The function to execute after the current function completes
 */
export const after = (callback: () => Promise<void> | void): void => {
  // Schedule the callback to run after the current execution context
  Promise.resolve().then(() => {
    callback();
  });
};