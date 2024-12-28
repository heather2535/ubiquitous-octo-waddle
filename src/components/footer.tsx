import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className=" bg-white">
      <div className="container px-4 py-8 md:py-12">
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 Positivus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
