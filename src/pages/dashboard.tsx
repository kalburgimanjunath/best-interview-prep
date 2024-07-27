import { Route, Routes, useParams } from "react-router";
import Sidebar from "../components/features/dashboard/sidebar";
import ProductCrousal from "../components/features/banners/cards/product-crousal";
import { useEffect, useState } from "react";
import ChatWindow from "../components/features/dashboard/ChatWindow";

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
      <div className="font-bold text-2xl">Notes</div>
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

  const items = [{ id: 1, title: "test", description: "", image: "" }];
  return (
    <div className="flex">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-8 w-full ">
        <ChatWindow id={id} />
        {/* <div className="m-20 p-5">
          <ProductCrousal items={items} type="" />
        </div> */}
        <div className="w-3/4 m-20 p-5">
          <div className="">
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
