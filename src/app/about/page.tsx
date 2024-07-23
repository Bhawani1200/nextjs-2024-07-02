import { Metadata } from "next";
import AuthLayout from "../layouts/AuthLayout";

export const metadata = {
  title: "About page",
};
export default function About() {
  return (
    <div>
      <AuthLayout>
        <h1 className="text-center">This is about page</h1>
      </AuthLayout>
    </div>
  );
}
