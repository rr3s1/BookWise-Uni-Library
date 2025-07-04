import Header from '@/components/Header';
import React from 'react'
import { ReactNode } from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {users} from "@/database/schema";
import {after} from "node:test";
import {db} from "@/database/drizzle";
import {eq} from "drizzle-orm";



const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  after(async()=> {
      if (!session?.user?.id) return;

      const user = await db
          .select()
          .from(users)
          .where(eq(users.id, session?.user?.id))
          .limit(1);
      if (user[0].lastActivityDate === new Date().toISOString().slice(0, 10))
          return;

      await db
          .update(users)
          .set({lastActivityDate: new Date().toISOString().slice(0, 10)})
          .where(eq(users.id, session?.user?.id))

  })
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