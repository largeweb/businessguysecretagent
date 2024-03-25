// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BusinessGuySecretAgent. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Powered by AI Agents. Crafted with humor and creativity.
        </p>
      </div>
    </footer>
  );
}
