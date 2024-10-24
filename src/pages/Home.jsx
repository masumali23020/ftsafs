import React from "react";
import Header from "../components/Header";
import SIdebar from "../components/Sidebar";
import Done from "../components/projects/Done";
import OnProgres from "../components/projects/OnProgres";
import Revised from "../components/projects/Revised";
import SubHeader from "../components/projects/SubHeader";
import Todo from "../components/projects/Todo";

const Home = () => {
  return (
    <div class="flex h-screen">
      <SIdebar />

      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div class="mx-auto max-w-7xl p-6">
          <SubHeader />
          <div class="-mx-2 mb-6 flex flex-wrap">
            <Todo />
            <OnProgres />
            <Done />
            <Revised />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
