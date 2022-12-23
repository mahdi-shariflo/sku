import { useState } from "react";
import CardPost from "../components/CardPost";
import LayoutBublic from "../components/layout/LayoutBublic";
import { TabMenu } from "../utils/data";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState(
    Array.from({ length: 20 })
  );
  const [selected, setSelected] = useState(1);
  const clickTabs = (id: number) => {
    // if (selected === id) return;
    setSelected(id);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      const contact = data.concat(
        Array.from({ length: 20 })
      );
      setData(contact);
    }, 1500);
  };
  return (
    <LayoutBublic>
      <div className="flex-1 max-h-screen overflow-hidden">
        <div className="flex h-fit  justify-between pt-10 px-10">
          <div className="flex flex-col items-center">
            <p
              className="text-black z-50 !cursor-pointer font-sansBlack text-[14px] "
              onClick={() => clickTabs(TabMenu[0].id)}
            >
              {TabMenu[0].name}
            </p>
            {selected === 1 && (
              <p className="w-2 mt-2 h-3 rounded-full bg-[#096FA6]"></p>
            )}
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <p
                className="text-black cursor-pointer font-medium text-[12px] "
                onClick={() => clickTabs(TabMenu[1].id)}
              >
                {TabMenu[1].name}
              </p>
              {selected === 2 && (
                <p className="w-2 mt-2 h-3 rounded-full bg-[#096FA6]"></p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-black cursor-pointer font-medium text-[12px] "
                onClick={() => clickTabs(TabMenu[2].id)}
              >
                {TabMenu[2].name}
              </p>
              {selected === 3 && (
                <p className="w-2 mt-2 h-3 rounded-full bg-[#096FA6]"></p>
              )}
            </div>
          </div>
        </div>
        {/* show post */}

        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={true}
          loader={""}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          pullDownToRefreshThreshold={50}
        >
          <div className="grid grid-cols-2 mt-5 h-[71.7vh] pb-14 px-10 gap-10 overflow-auto container_posts">
            {data.map((data, i) => (
              <CardPost key={i} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </LayoutBublic>
  );
};

export default Home;
