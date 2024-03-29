"use client";
import AdminTemplate from "@/components/templates/AdminTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import React from "react";

const admin = () => {
  return (
    <SideMenuLayout>
      <AdminTemplate />
    </SideMenuLayout>
  );
};

export default admin;
