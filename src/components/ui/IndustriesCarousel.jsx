import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import BubbleText from "./BubbleText";
import SCard from "./SCard";

const IndustriesCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="bg-neutral-800">
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <BubbleText text="Powering success across multiple industries" />
          <motion.div style={{ x }} className="flex gap-4">
            {/* {cards.map((card) => {
              return <SCard card={card} key={card.id} />;
            })} */}
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0.6, scale: 0.8 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 500 }}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-white/30 backdrop-blur-sm rounded-xl"
    >
      <div
        style={{ backgroundImage: `url(${card.url})` }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 blur-md group-hover:blur-none"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl text-center font-black uppercase text-white">
          {card.title}
        </p>
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-md font-black uppercase text-white">
          {card.message}
        </p>
      </div>
    </motion.div>
  );
};

const cards = [
  {
    url: "https://t4.ftcdn.net/jpg/05/72/54/67/360_F_572546714_2mn39TUv2f5Lmg7JRT9yvSkuTJERGyg8.jpg",
    title: "Title 1",
    message:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    title: "Title 2",
    message:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    id: 2,
  },
  {
    url: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg",
    title: "Title 3",
    message:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    id: 3,
  },
  {
    url: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
    title: "Title 4",
    message:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    id: 4,
  },
];

export default IndustriesCarousel;
