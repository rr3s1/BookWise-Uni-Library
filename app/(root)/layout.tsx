import Header from '@/components/Header';
import React from 'react'
import { ReactNode } from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {users} from "@/database/schema";
import {db} from "@/database/drizzle";
import {eq} from "drizzle-orm";



const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  // Update user's last activity date
  if (session?.user?.id) {
    try {
      const user = await db
          .select()
          .from(users)
          .where(eq(users.id, session.user.id))
          .limit(1);

      if (user.length > 0 && user[0].lastActivityDate !== new Date().toISOString().slice(0, 10)) {
        await db
            .update(users)
            .set({lastActivityDate: new Date().toISOString().slice(0, 10)})
            .where(eq(users.id, session.user.id));
      }
    } catch (error) {
      console.error("Error updating last activity date:", error);
      // Continue with rendering even if updating activity date fails
    }
  }
    return (
      <main className="root-container">
        <div className="mx-auto max-w-7xl">
        <Header session={session} />
          <div className="mt-20 pb-20">{children}</div>
        </div>
      </main>
    );
  };

  export default Layout;
