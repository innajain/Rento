"use client"
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

interface BreadCrumbItem {
  label: string;
  url: string;
}
interface Props {
  breadCrumbItems: BreadCrumbItem[];
}
export default function BreadCrumb({ breadCrumbItems }: Props) {
  return (
    <Breadcrumbs>
      {breadCrumbItems.map((item, i) => (
        <BreadcrumbItem color="danger" key={i} href={item.url}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
