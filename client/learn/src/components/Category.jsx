// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tabs } from "@mantine/core";

const Category = () => {
  const Category = [
    "General",
    "Sports",
    "Politics",
    "Business",
    "Entertainment",
    "Movies",
  ];
  return (
    <div>
      <h1 className="text-center space-y-10 font-bold  text-2xl">Categories</h1>

      <Tabs defaultValue="gallery">
        <Tabs.List>
          {Category.map((cat) => (
            <Tabs.Tab key={cat} value={cat}>
              {cat}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default Category;

// <Tabs.List>
// 				  <Tabs.Tab
// 					leftSection={<BookMarked size={16} color="green" />}
// 					value="Bookmark"
// 				  >
// 					Bookmark
// 				  </Tabs.Tab>
// 				  <Tabs.Tab
// 					leftSection={<Heart size={16} color="red" />}
// 					value="messages"
// 				  >
// 					Liked News
// 				  </Tabs.Tab>
// 				  <Tabs.Tab
// 					leftSection={<Cog size={16} color="pink" />}
// 					value="preferences"
// 				  >
// 					Preferences
// 				  </Tabs.Tab>
// 				  <Tabs.Tab
// 					leftSection={<Bot size={16} color="green" />}
// 					value="ai-recommandations"
// 				  >
// 					AI Recommandations
// 				  </Tabs.Tab>
