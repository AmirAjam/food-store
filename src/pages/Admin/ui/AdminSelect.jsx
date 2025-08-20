import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AdminSelect({ defaultValue, children ,changeHandler,itemId}) {
    return (
        <Select defaultValue={defaultValue} onValueChange={() => changeHandler(itemId)}>
            <SelectTrigger className={`${defaultValue === "admin" &&"bg-neutral-400/50"}
             w-[180px] text-right  border border-gray-400 cursor-pointer`}
                dir="rtl">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent dir="rtl">
                <SelectGroup className="cursor-pointer">
                    {children}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}