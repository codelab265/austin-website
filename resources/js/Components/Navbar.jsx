import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@inertiajs/react";

function Navbar() {
    return (
        <nav className="w-full bg-transparent flex items-center justify-between z-50">
            <div className="flex items-center gap-4">
                <div className="size-8 rounded-full bg-[#EA413C]" />
                <Link
                    href="/"
                    className="text-white text-[36px] leading-[43.2px] -tracking-[0.5%] font-medium"
                >
                    AUSTIN UKPORHE
                </Link>
            </div>
            <Sheet>
                <SheetTrigger>
                    <div className="px-4 py-2">
                        <img src="/images/menu.png" alt="menu" />
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default Navbar;
