import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex p-4 text-sm w-full gap-6 sm:flex-row flex-col items-center justify-between">
        <p>
          © {new Date().getFullYear()} RealtyConnect.co.zw. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="#">Privacy Policy</Link>{" "}
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
