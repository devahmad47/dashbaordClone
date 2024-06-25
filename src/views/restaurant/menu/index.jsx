// import Banner from "./components/Banner";
// import NFt2 from "assets/img/nfts/Nft2.png";
// import NFt4 from "assets/img/nfts/Nft4.png";
// import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import pizza from "assets/img/auth/pizza.jpg"
import burger from "assets/img/auth/burger.jpg"
import classic from "assets/img/auth/classic.jpg"
import maxi from "assets/img/auth/maxi.jpg"
import pizzaau from "assets/img/auth/pizzaau.png"
import tacos from "assets/img/auth/tacos.jpg"
import vegetarian from "assets/img/auth/vegetarian.jpg"
import boursin from "assets/img/auth/boursin.jpg"
import norvigienne from "assets/img/auth/norvigienne.jpg"




// import image1 from "assets/img/auth/image1.jpeg"

// import tableDataTopCreators from "views/admin/Menu/variables/tableDataTopCreators.json";
// import { tableColumnsTopCreators } from "views/admin/Menu/variables/tableColumnsTopCreators";
// import HistoryCard from "./components/HistoryCard";
// import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";

const Menu = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* NFt Banner */}
        {/* <Banner /> */}

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <ul className="mt-4 sm:flex hidden items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Desserts
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
              Juices
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Vegetables
                
              </a>
            </li>
            <li>
              <a  
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                <a href=" ">Fast Food</a>
              </a>
            </li>
          </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-3 md:grid-cols-3">
          <NftCard
            bidders={[]}
            title="American"
            author="Esthera Jackson"
            price="0.91"
            image={norvigienne}
          />
          <NftCard
            bidders={[]}
            title="Asian"
            author="Nick Wilson"
            price="0.7"
            image={classic}
          />
          <NftCard
            bidders={[]}
            title="Italian"
            author="Will Smith"
            price="2.91"
            image={vegetarian}
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Fast Food
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="American"
            author="Esthera Jackson"
            price="0.91"
            image={boursin}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Asian"
            author="Nick Wilson"
            price="0.7"
            image={pizzaau}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Italian"
            author="Will Smith"
            price="2.91"
            image={maxi}
          />
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        {/* <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        /> */}
        {/* <HistoryCard /> */}
      </div>
    </div>
  );
};

export default Menu;
