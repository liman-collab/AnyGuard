import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import oval from '../../assets/oval.svg'
export default function CarouselComp(props) {
    var items = [
        {
            name: "Cody 1",
            text: 'Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.',
            avatar: oval
        },
        {
            name: "Cody 2",
            text: 'Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.',
            avatar: oval

        },
        {
            name: "Cody 3",
            text: 'Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.',
            avatar: oval

        },
        {
            name: "Cody 4",
            text: 'Anyguardis the best antivirus I’ve ever use until now. I don’t worry about device protection cause Anyguard can give me secure feeling when I need to surfing in internet everytime.',
            avatar: oval

        }
    ]

    return (
        <Carousel
            next={(next, active) => console.log(`${next}`)}

        >
            {
                items.map((item, i) => <Item key={i} text={item.text} avatar={item.avatar} name={item.name} />)
            }
        </Carousel >
    )
}