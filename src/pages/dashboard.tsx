import { Route, Routes, useParams } from "react-router";
import Sidebar from "../components/features/dashboard/sidebar";
import ProductCrousal from "../components/features/banners/cards/product-crousal";
import { useEffect, useState } from "react";

const PostCards = () => {
  const [posts, setPosts] = useState();
  const loadData = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((results) => setPosts(results))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4">
      {posts &&
        posts.map((item) => {
          return (
            <div key={item.id} className="bg-gray-100 border shadow-lg">
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
          );
        })}
    </div>
  );
};

export default function Dashboard() {
  const { id } = useParams();

  const items = [{ id: 1, title: "tesxt", description: "", image: "" }];
  return (
    <div className="grid grid-cols-2">
      <Sidebar />
      <div className="justify-center">
        <div className="fixed flex border-b-2 w-full items-center justify-between left-10 p-2 ">
          <span className="font-bold capitalize text-2xl">{id}</span>
          <div className="flex">
            <input type="search" className="mr-2 bg-gray-300 rounded-sm" />
            <div className="bg-gray-300 rounded-sm p-2">Dashboard</div>
          </div>
        </div>
        <div className="w-full m-20 p-5">
          <ProductCrousal items={items} type="" />
        </div>
        <div className="w-full m-20 p-5">
          <div className="w-full">
            <div className="flex bg-gray-300 p-5 justify-between">
              <textarea
                type="text"
                placeholder="Whats in your mind?"
                className="bg-gray-300 w-full"
                color="#000000"
              />
              <button
                type="button"
                className="bg-orange-300 border rounded-lg m-2 p-2"
              >
                POST
              </button>
            </div>
          </div>
        </div>
        <div className="m-20 p-5">
          <PostCards />
        </div>
      </div>
    </div>
  );
}
