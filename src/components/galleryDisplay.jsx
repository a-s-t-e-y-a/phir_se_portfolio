import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import { FaCircleDot } from 'react-icons/fa6';
import SectionHeading from './sectionSubHeading';
import './gallery.css';
import ComingSoon from './comingSoon';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GalleryGrid = () => {
    // Define layouts for different breakpoints
    const layouts = {
        lg: [
            { i: 'item1', x: 0, y: 21, w: 2, h: 12 },
            { i: 'item2', x: 2, y: 0, w: 2, h: 16 },
            { i: 'item3', x: 0, y: 9, w: 2, h: 12 },
            { i: 'item4', x: 2, y: 16, w: 2, h: 8 },
            { i: 'item5', x: 0, y: 0, w: 4, h: 10 }, // This spans more columns
            { i: 'item6', x: 0, y: 31, w: 2, h: 7 },
            { i: 'item7', x: 2, y: 31, w: 2, h: 11 },
        ],
        md: [
            { i: 'item1', x: 0, y: 21, w: 3, h: 12 },
            { i: 'item2', x: 3, y: 0, w: 3, h: 16 },
            { i: 'item3', x: 0, y: 9, w: 3, h: 12 },
            { i: 'item4', x: 3, y: 16, w: 3, h: 8 },
            { i: 'item5', x: 0, y: 0, w: 6, h: 10 }, // Full width on medium
            { i: 'item6', x: 0, y: 31, w: 3, h: 7 },
            { i: 'item7', x: 3, y: 31, w: 3, h: 11 },
        ],
        sm: [
            { i: 'item1', x: 0, y: 21, w: 3, h: 12 },
            { i: 'item2', x: 0, y: 33, w: 3, h: 16 },
            { i: 'item3', x: 0, y: 9, w: 3, h: 12 },
            { i: 'item4', x: 3, y: 9, w: 3, h: 8 },
            { i: 'item5', x: 0, y: 0, w: 6, h: 10 }, // Full width on small
            { i: 'item6', x: 0, y: 49, w: 3, h: 7 },
            { i: 'item7', x: 3, y: 49, w: 3, h: 11 },
        ],
        xs: [
            { i: 'item1', x: 0, y: 10, w: 4, h: 12 },
            { i: 'item2', x: 0, y: 22, w: 4, h: 16 },
            { i: 'item3', x: 0, y: 38, w: 4, h: 12 },
            { i: 'item4', x: 0, y: 50, w: 4, h: 8 },
            { i: 'item5', x: 0, y: 0, w: 4, h: 10 }, // Full width on extra small
            { i: 'item6', x: 0, y: 58, w: 4, h: 7 },
            { i: 'item7', x: 0, y: 65, w: 4, h: 11 },
        ]
    };

    // Array of specific Unsplash image URLs
    const imageUrls = [
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    const getImageUrl = (index) => {
        return imageUrls[index % imageUrls.length];
    };

    return (

        <>
            <div className='mt-16 text-[#c0c0c0]'>
                <SectionHeading heading="Gallery" />
            </div>
            <ComingSoon/>
            {/* <ResponsiveGridLayout
                className="gallery-layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 4, md: 6, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}
                margin={[10, 10]}
                containerPadding={[15, 15]}
                isResizable={false}
                isDraggable={(width) => width >= 1200}
            >
                {layouts.lg.map((item, index) => (
                    <div className='rounded-xl overflow-hidden' key={item.i}>
                        <img
                            alt={`Unsplash image ${index + 1}`}
                            className="w-full h-full object-cover"
                            src={getImageUrl(index)}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout> */}
        </>

    );
};

export default GalleryGrid;