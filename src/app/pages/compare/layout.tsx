import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Local Government",
  description: "Tools and scripts for work in local government",
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          {children}
      </>
  );
}
