"use client"
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Link from "next/link";
interface Props{
  collegeName?: string;
}
export default function CollegeRoutePageBreadCrumb(props:Props) {
  return (
    <div className="flex mt-2 flex-col flex-wrap gap-4">
      <Breadcrumbs variant="solid">
        <BreadcrumbItem>
        <Link href="/">
        Home
        </Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="font-bold">
        <span className="text-primary">
        {props.collegeName}
        </span>
        </BreadcrumbItem>
      </Breadcrumbs>
  </div>
  )
}
