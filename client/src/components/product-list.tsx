"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductList({ products }: { products: any[] }) {
  const router = useRouter();

  const handleSelect = () => {};

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, i) => (
        <Card className="w-[350px]" key={i}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              Open
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
