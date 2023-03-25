import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Logo } from "../logo/logo";
import { dataCard } from "../data";
import "./styles.css";
import { useEffect, useState } from "react";
import { CardList } from "../post-list/post-list";
import { Title } from "../title/title"
import { Pagination } from 'antd';


export function App() {
    const [cards, setCards] = useState(dataCard);

    return (
        <>
            <Header>
                <Logo/>
            </Header>
            <Title />
            <main className="content container">
                <CardList goods={cards} />
            </main>
            <Footer/>
        </>
    );
  }