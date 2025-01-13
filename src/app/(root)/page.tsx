import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      {/* Removed afterSignOutUrl; the behavior is now configured via Clerk settings */}
      <UserButton />
    </div>
  );
}
