import React from "react";

import { MealsList } from "../../components/index";
import { Layout } from "../../layouts";

export default function Home() {
  return (
    <Layout headerActions={{ cartButton: true, shopButton: false }}>
      <main>
        <MealsList />
      </main>
    </Layout>
  );
}
