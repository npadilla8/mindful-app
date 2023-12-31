const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function main() {
    //seeding category table
    await prisma.category.upsert({
        where: { name: 'Clothing & Jewelry' },
        update: {},
        create: {
            name: 'Clothing & Jewelry'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Toys' },
        update: {},
        create: {
            name: 'Toys'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Collectibles & Art' },
        update: {},
        create: {
            name: 'Collectibles & Art'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Home & Living' },
        update: {},
        create: {
            name: 'Home & Living'
        }
    });

    //seeding product table
    //collectibles & art
    await prisma.product.upsert({
        where: { title: 'Corner Bookmark' },
        update: {image: "https://i.etsystatic.com/42183806/r/il/27351e/5186271600/il_300x300.5186271600_khi0.jpg"},
        create: {
            title: 'Corner Bookmark',
            image: './product_images/collectibles & art/Corner Bookmark.avif',
            description: 'Personalized Hand Embroidered Corner Bookmark | Book Lovers',
            price: 9,
            available: true,
            returnPolicy: true,
            quantity: 5,
            categoryId: 3
        }
    });
    await prisma.product.upsert({
        where: { title: 'Acrylic Bookmark' },
        update: {image: "https://i.etsystatic.com/29999846/r/il/848da9/4877551029/il_300x300.4877551029_8w6l.jpg"},
        create: {
            title: 'Acrylic Bookmark',
            image: './product_images/collectibles & art/Acrylic Bookmark.avif',
            description: 'Personalized Name Acrylic Bookmark | Handmade Floral Bookmark',
            price: 11,
            available: true,
            returnPolicy: true,
            quantity: 9,
            categoryId: 3
        }

    });

    // Coaster
    await prisma.product.upsert({
        where: { title: 'Flower Coaster' },
        update: {image: "https://hayhaycrochet.com/wp-content/uploads/2021/09/IMG_5270_jpg.jpg"},
        create: {
            title: 'Flower Coaster',
            image: './product_images/collectibles & art/Flower Coaster.jpg',
            description: 'Crochet Made Daisy Flower Coasters | Handmade Flower Coaster Set of 6',
            price: 12,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }

    });

    // Phone Case
    await prisma.product.upsert({
        where: { title: 'Phone Case' },
        update: {image: "https://lasercutwraps.com/cdn/shop/products/1640676387e77cbe4cc8b5f529d332ca7f63f3c7a4.jpg?v=1677738952"},
        create: {
            title: 'Phone Case',
            image: './product_images/collectibles & art/Phone Case.jpg',
            description: 'Vintage Style Collage Phone Case | iPhone 12 Plus',
            price: 15,
            available: true,
            returnPolicy: true,
            quantity: 8,
            categoryId: 3
        }

    });


    await prisma.product.upsert({
        where: { title: 'Watercolor Painting' },
        update: {image: "https://i.etsystatic.com/30927076/r/il/2f461c/4217697582/il_600x600.4217697582_6yn0.jpg"},
        create: {
            title: 'Watercolor Painting',
            image: './product_images/collectibles & art/Watercolor Painting.webp',
            description: 'Dog Painting Custom From Photo | Pet Portrait Print ',
            price: 80,
            available: true,
            returnPolicy: false,
            quantity: 1,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Copper Rose' },
        update: {},
        create: {
            title: 'Copper Rose',
            image: 'https://i.etsystatic.com/9126195/r/il/6e253c/1615309961/il_794xN.1615309961_4fh9.jpg',
            description: 'Hand Forged Metal | Handmade Flower | Engagement and Anniversary Gifts ',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Safari Nursery Decor' },
        update: {},
        create: {
            title: 'Safari Nursery Decor',
            image: 'https://i.etsystatic.com/5910444/r/il/ae2299/4618382672/il_794xN.4618382672_d5gm.jpg',
            description: ' Jungle Nursery Prints | Safari Nursery Art Print | Zebra, Elephant, Giraffe ',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Large Amethyst Crystal' },
        update: {},
        create: {
            title: 'Large Amethyst Crystal',
            image: 'https://i.etsystatic.com/21962105/r/il/fdcb53/4185744135/il_1588xN.4185744135_abk2.jpg',
            description: 'Druze Geode | Natural Stone | 4 lbs',
            price: 145,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wool Landscape Painting' },
        update: {},
        create: {
            title: 'Wool Landscape Painting',
            image: 'https://i.etsystatic.com/11818131/r/il/d2a147/3035694012/il_1588xN.3035694012_mpud.jpg',
            description: '100% Wool | Felt Needle Art | Wall Decor',
            price: 95,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Turkish Water Marbling Art' },
        update: {},
        create: {
            title: 'Turkish Water Marbling Art',
            image: 'https://i.etsystatic.com/45736886/r/il/291cd3/5235278585/il_1588xN.5235278585_50me.jpg',
            description: 'Painted on Water | Wall Art',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Sheet Music Print' },
        update: {},
        create: {
            title: 'Sheet Music Print',
            image: 'https://i.etsystatic.com/8306577/r/il/8393f1/1789892574/il_1588xN.1789892574_7s4j.jpg',
            description: 'Poster Print | 40 x 30 Inch',
            price: 168,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });

    await prisma.product.upsert({
        where: { title: 'Heart Wall Art' },
        update: {},
        create: {
            title: 'Heart Wall Art',
            image: 'https://i.etsystatic.com/5537772/r/il/fe469f/4677986555/il_1588xN.4677986555_ki0j.jpg',
            description: 'Made from Recycled Paper | Textured | 6 Inch Heart',
            price: 42,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }
    });


    //clothing & jewelry
    await prisma.product.upsert({
        where: { title: 'Stethoscope Necklace' },
        update: {image:"https://i.etsystatic.com/15563617/c/1176/934/237/202/il/adb0ad/1535620899/il_340x270.1535620899_lffd.jpg"},
        create: {
            title: 'Stethoscope Necklace',
            image: './product_images/clothing & jewelry/Stethoscope Necklace.avif',
            description: 'Custom Stethoscope Necklace With Name | Healthcare Worker',
            price: 60,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Birthstone Necklace' },
        update: {image: "https://i.etsystatic.com/5634743/c/1937/1937/314/688/il/de81c0/3537979898/il_300x300.3537979898_9u4g.jpg"},
        create: {
            title: 'Birthstone Necklace',
            image: './product_images/clothing & jewelry/Birthstone Necklace.avif',
            description: 'Raw Aquamarine Necklace | March Birthstone | Crystal Rough Gemstone',
            price: 31,
            available: true,
            returnPolicy: true,
            quantity: 8,
            categoryId: 1
        }
    });

    // Earrings
    await prisma.product.upsert({
        where: { title: 'Rainbow Earrings' },
        update: {image: "https://i.etsystatic.com/29743919/r/il/5c4f1c/4603159610/il_1080xN.4603159610_9trs.jpg"},
        create: {
            title: 'Rainbow Earrings',
            image: './product_images/clothing & jewelry/Earrings.avif',
            description: 'Handmade Polymer Clay Drop Earrings | Pastel Rainbow Arch',
            price: 20,
            available: true,
            returnPolicy: true,
            quantity: 15,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Head Bands' },
        update: {image: "https://static.wixstatic.com/media/e14a27_f122aad2be274f75bb6180a68c6bd708~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e14a27_f122aad2be274f75bb6180a68c6bd708~mv2.jpg"},
        create: {
            title: 'Head Bands',
            image: './product_images/clothing & jewelry/Head Band.webp',
            description: 'Soft Handmade Head Bands Set Of 4 | Super Soft And Fluffy',
            price: 10,
            available: true,
            returnPolicy: true,
            quantity: 20,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Personalized Sweater' },
        update: {image: "https://i.etsystatic.com/28504538/r/il/b55b37/5318226455/il_300x300.5318226455_t2jn.jpg"},
        create: {
            title: 'Personalized Sweater',
            image: './product_images/clothing & jewelry/Stethoscope Necklace.avif',
            description: 'Hand Embroidered With Name | Baby and Toddler Chunky Sweater',
            price: 82,
            available: true,
            returnPolicy: false,
            quantity: 3,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Zodiac Necklace' },
        update: {image: "https://i.etsystatic.com/35356354/r/il/330016/4451141359/il_1588xN.4451141359_qx3d.jpg"},
        create: {
            title: 'Zodiac Necklace',
            description: 'Minimalist Zodiac Necklace | Birthstone | Astrology Necklace | Personalized Jewelry',
            price: 23,
            available: true,
            returnPolicy: false,
            quantity: 4,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Book Sweatshirt' },
        update: {image: "https://i.etsystatic.com/38782048/r/il/02dab9/4788954934/il_1588xN.4788954934_4tng.jpg"},
        create: {
            title: 'Book Sweatshirt',
            description: 'Bookish Sweatshirt | Book Lover Sweatshirt | Cat Book Sweatshirt | Floral Cat Sweatshirt',
            price: 20,
            available: true,
            returnPolicy: false,
            quantity: 15,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Squirrel Skirt' },
        update: {},
        create: {
            title: 'Squirrel Skirt',
            image: "https://i.etsystatic.com/5961957/r/il/924b2a/4635152429/il_1588xN.4635152429_n3u8.jpg",
            description: 'Handmade Cotton Skirt | Side Zipper | Knee Length',
            price: 54,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wool Poncho' },
        update: {},
        create: {
            title: 'Wool Poncho',
            image: "https://i.etsystatic.com/7930340/r/il/2a5b09/4912035614/il_1588xN.4912035614_hxda.jpg",
            description: 'Handmade Wool Blanket Poncho | OSFM',
            price: 118,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wool Men`s Socks' },
        update: {},
        create: {
            title: 'Wool Men`s Socks',
            image: "https://i.etsystatic.com/24061159/r/il/747335/4412727619/il_1588xN.4412727619_4dzj.jpg",
            description: '5 Handmade Wool Socks | Naturally Dyed',
            price: 75,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Embroidered Fingerless Gloves' },
        update: {},
        create: {
            title: 'Embroidered Fingerless Gloves',
            image: "https://i.etsystatic.com/8370795/r/il/c2f458/2675123621/il_1588xN.2675123621_mhkz.jpg",
            description: 'Hand Embroidered | Keeps Warm and Cozy',
            price: 25,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 1
        }
    });

    await prisma.product.upsert({
        where: { title: 'Leather Purse' },
        update: {},
        create: {
            title: 'Leather Purse',
            image: "https://i.etsystatic.com/32646140/r/il/fa9e0b/3488616309/il_1588xN.3488616309_lqrk.jpg",
            description: 'Handmade Leather Purse | Tanned with Natural Materials',
            price: 175,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 1
        }
    });


    //toys
    await prisma.product.upsert({
        where: { title: 'Crochet Rattle' },
        update: {image: "https://i.etsystatic.com/35391247/r/il/b1d72f/5284649590/il_794xN.5284649590_e2yg.jpg"},
        create: {
            title: 'Crochet Rattle',
            image: './product_images/toys/Crochet Rattle.avif',
            description: 'Custom Wooden Baby Rattle | Crochet Rattle Toy | Teething Ring',
            price: 13,
            available: true,
            returnPolicy: false,
            quantity: 25,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Tea Party Set' },
        update: {image: "https://ae01.alicdn.com/kf/Sb4cb745a6226450d91d188aa9511e8834/Court-Style-Wooden-Pretend-Play-Sets-Simulation-Tea-Party-Food-Kitchen-Cake-Shop-Game-Toy-Early.jpg"},
        create: {
            title: 'Tea Party Set',
            image: './product_images/toys/Tea Party.webp',
            description: 'Court Style Wooden Pretend Play Set | Simulation Tea Party Kitchen Toy | Early Educational for Kids',
            price: 13,
            available: true,
            returnPolicy: false,
            quantity: 25,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Talking Flash Cards' },
        update: {image: "https://m.media-amazon.com/images/I/71G40-4m+AL._AC_UF894,1000_QL80_.jpg"},
        create: {
            title: 'Talking Flash Cards',
            image: './product_images/toys/Cards.jpg',
            description: 'Talking Flash Cards For Toddlers | Learning Toy For Speech ',
            price: 20,
            available: true,
            returnPolicy: false,
            quantity: 7,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Push Toy' },
        update: {image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/eac2e81aa99c001422f173aa77825b54.jpg"},
        create: {
            title: 'Push Toy',
            image: './product_images/toys/Push Toy.jpg',
            description: 'Cute Bear Quick Push Game | Focus Training and Thinking Logic',
            price: 10,
            available: true,
            returnPolicy: false,
            quantity: 5,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Alphabet Puzzle' },
        update: {image: "https://target.scene7.com/is/image/Target/GUEST_cea8f161-5804-4dab-bb1a-42c609593334?wid=1200&hei=1200&qlt=80&fmt=webp"},
        create: {
            title: 'Alphabet Puzzle',
            image: './product_images/toys/Alphabet Puzzle.webp',
            description: 'Toy Peg Puzzle for Memory And Motor Skills | 28pc With Colorful Letter | Made With Wood',
            price: 25,
            available: true,
            returnPolicy: false,
            quantity: 6,
            categoryId: 2
        }
    });


    await prisma.product.upsert({
        where: { title: 'Human Body Puzzle' },
        update: {image: "https://i.etsystatic.com/32753543/r/il/8c72f6/3842617767/il_794xN.3842617767_gft1.jpg"},
        create: {
            title: 'Human Body Puzzle',
            image: './product_images/toys/Human Body Puzzle.avif',
            description: 'Kids Anatomy Puzzle | Montessori Toys | Wooden Human Puzzle ',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 105,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Montessori Climber' },
        update: {image: "https://i.etsystatic.com/21222226/r/il/9a8978/4172706705/il_794xN.4172706705_7bc4.jpg"},
        create: {
            title: 'Montessori Climber',
            image: './product_images/toys/Montessori Climber.avif',
            description: 'Climbing Ladder | Indoor Playground | Climbing Arch | Pickler Triangle Set',
            price: 150,
            available: true,
            returnPolicy: true,
            quantity: 55,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wooden Train Music Box' },
        update: {image: "https://i.etsystatic.com/22774256/r/il/33d02d/5544945633/il_1588xN.5544945633_6i7h.jpg"},
        create: {
            title: 'Wooden Train Music Box',
            image: 'https://i.etsystatic.com/22774256/r/il/33d02d/5544945633/il_1588xN.5544945633_6i7h.jpg',
            description: 'Train Music Box | Birthday Gifts | Music Box for Kids',
            price: 30,
            available: true,
            returnPolicy: true,
            quantity: 31,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Montessori Object Permanance Box' },
        update: {},
        create: {
            title: 'Montessori Object Permanance Box',
            image: 'https://i.etsystatic.com/23419874/r/il/efa580/3702861162/il_794xN.3702861162_6bdw.jpg',
            description: 'Wooden Toy Tray and Ball | Montessori | First Learning Toys',
            price: 18,
            available: true,
            returnPolicy: true,
            quantity: 50,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Large Teepee Tent' },
        update: {},
        create: {
            title: 'Large Teepee Tent',
            image: 'https://i.etsystatic.com/32228318/r/il/fcf8e7/3607795998/il_794xN.3607795998_4lrh.jpg',
            description: 'White and Orange Playhouse for Kids | Fox Themed Gift | Play Tent with Mat',
            price: 75,
            available: true,
            returnPolicy: true,
            quantity: 5,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Cloth Doll' },
        update: {},
        create: {
            title: 'Cloth Doll',
            image: 'https://i.etsystatic.com/11234485/r/il/2d565a/3401034980/il_794xN.3401034980_hz7v.jpg',
            description: 'Rag Doll | Handmade Soft Doll with Clothes | Multicultural',
            price: 48,
            available: true,
            returnPolicy: true,
            quantity: 7,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wooden Toy Train' },
        update: {},
        create: {
            title: 'Wooden Toy Train',
            image: "https://i.etsystatic.com/47691392/r/il/9c715d/5454105286/il_1588xN.5454105286_eifo.jpg",
            description: 'Handmade Non-toxic Wood | Soft Colors | 4 Wagons',
            price: 28,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wooden Balance Board' },
        update: {},
        create: {
            title: 'Wooden Balance Board',
            image: "https://i.etsystatic.com/31310067/r/il/e718a6/5062587759/il_1588xN.5062587759_45iw.jpg",
            description: 'Handmade Non-toxic Wood | Montessori Toy | Rocking Board',
            price: 55,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Toddler Wooden Knife and Board' },
        update: {},
        create: {
            title: 'Toddler Wooden Knife and Board',
            image: "https://i.etsystatic.com/22537583/r/il/08ff18/4512738540/il_1588xN.4512738540_rli1.jpg",
            description: 'Handmade Non-toxic Wood | 3 Knives and Cutting Board | Food Safe',
            price: 45,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 2
        }
    });

    await prisma.product.upsert({
        where: { title: 'Musical Instruments' },
        update: {},
        create: {
            title: 'Musical Instruments',
            image: "https://i.etsystatic.com/26491724/r/il/7c0f78/3740119134/il_1588xN.3740119134_1p99.jpg",
            description: 'Handmade Non-toxic Wood | 10 Instruments',
            price: 90,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 2
        }
    });

    //home & living
    await prisma.product.upsert({
        where: { title: 'Breakfast Lover Candle' },
        update: {image: "https://i.etsystatic.com/17198792/c/980/980/0/154/il/837491/4587060181/il_300x300.4587060181_mf0e.jpg"},
        create: {
            title: 'Breakfast Lover Candle',
            image: './product_images/home & living/Breakfast Lover Candle.webp',
            description: 'Maine Blueberry Waffles Delicious Candle | Realistic Waffles, Blueberries, Syrup',
            price: 15,
            available: true,
            returnPolicy: true,
            quantity: 28,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Storage Basket' },
        update: {image: "https://i5.walmartimages.com/asr/a87c77b9-9d22-4c81-be47-e58d3c0dcff9.e0ee2eecfeea5d026597bb38c0d3f2a0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"},
        create: {
            title: 'Storage Basket',
            image: './product_images/home & living/Storage Basket.webp',
            description: 'Pink Cotton Round Organizer | Stylish Design Storage Set of 3',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 18,
            categoryId: 4
        }
    });


    await prisma.product.upsert({
        where: { title: 'Goat Milk Soap' },
        update: {image: "https://i.etsystatic.com/5737923/r/il/64e13a/1754790624/il_300x300.1754790624_g6gs.jpg"},
        create: {
            title: 'Goat Milk Soap',
            image: 'capstone/Mindful-App/server/db/product_images/home & living/Goat Milk Soap.webp',
            description: 'Handcrafted Goat Milk Scented Soap | Skin Care | 5 Bars | Self Care',
            price: 22,
            available: true,
            returnPolicy: false,
            quantity: 12,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Custom Rug' },
        update: {image: "https://i.etsystatic.com/27057003/r/il/dd6187/2912901859/il_570xN.2912901859_srz7.jpg"},
        create: {
            title: 'Custom Rug',
            image: 'capstone/Mindful-App/server/db/product_images/home & living/Rug.avif',
            description: 'Round Handmade Carpet | Contemporary Art Pastel Colors | Gorgeous Design And Quality',
            price: 150,
            available: true,
            returnPolicy: false,
            quantity: 10,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Aromatherapy Candle' },
        update: {image: "https://i.etsystatic.com/21554180/c/1299/1299/350/475/il/b6b6bf/5351630181/il_300x300.5351630181_37dn.jpg"},
        create: {
            title: 'Aromatherapy Candle',
            image: './product_images/home & living/Sleep & Relaxation Aromatherapy Candle.webp',
            description: '3 Wick Large Aromatherapy Candle | For Sleep, Relaxation & Happiness | Toxin Free',
            price: 35,
            available: true,
            returnPolicy: true,
            quantity: 50,
            categoryId: 4
        }
    });
    await prisma.product.upsert({
        where: { title: 'Sofa Table' },
        update: {},
        create: {
            title: 'Sofa Table',
            image: 'https://i.etsystatic.com/9865605/r/il/dd391d/4583199743/il_794xN.4583199743_tdra.jpg',
            description: 'Wood Sofa Table | Media Stand | Console Stand',
            price: 250,
            available: true,
            returnPolicy: true,
            quantity: 35,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Pressed Flowers Mug' },
        update: {},
        create: {
            title: 'Pressed Flowers Mug',
            image: 'https://i.etsystatic.com/43097361/r/il/96a4fe/5567219169/il_1588xN.5567219169_gr26.jpg',
            description: 'Boho Wildflowers | Cottagecore Coffee Mug | Flower Garden Lover | Botanical TeaCup',
            price: 18.50,
            available: true,
            returnPolicy: true,
            quantity: 39,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Affirmations Glass Cup' },
        update: {image: 'https://i.etsystatic.com/34041488/r/il/a741b7/5391748469/il_1588xN.5391748469_4f8x.jpg'},
        create: {
            title: 'Affirmations Glass Cup',
            image: 'https://i.etsystatic.com/34041488/r/il/a741b7/5391748469/il_1588xN.5391748469_4f8x.jpg',
            description: 'Daily Reminders Glass | Uplifting Word of Affirmation',
            price: 23.24,
            available: true,
            returnPolicy: true,
            quantity: 19,
            categoryId: 4
        }
    });


    await prisma.product.upsert({
        where: { title: 'Lavender Gift Set' },
        update: {},
        create: {
            title: 'Lavender Gift Set',
            image: 'https://i.etsystatic.com/16056986/r/il/3657d9/2015727857/il_1588xN.2015727857_o035.jpg',
            description: 'Relaxation Spa Gift Basket | Gifts for Her, Soap Gift Set | Aromatherapy Gift Basket | Organic Spa Gift Set',
            price: 36,
            available: true,
            returnPolicy: true,
            quantity: 45,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Gift Box' },
        update: {},
        create: {
            title: 'Gift Box',
            image: 'https://i.etsystatic.com/34523747/r/il/219fb7/5573500878/il_1588xN.5573500878_j36g.jpg',
            description: 'Personalized Gifts |Self Care Box',
            price: 40,
            available: true,
            returnPolicy: true,
            quantity: 21,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Handmade Soap' },
        update: {},
        create: {
            title: 'Handmade Soap',
            image: 'https://i.etsystatic.com/23683511/r/il/d91bf4/4420759375/il_1588xN.4420759375_5z86.jpg',
            description: 'Artisan Handmade Soap Gift Box | Personalized Gift | Soap Gift Set|',
            price: 38,
            available: true,
            returnPolicy: true,
            quantity: 69,
            categoryId: 4
        }
    });


    await prisma.product.upsert({
        where: { title: 'Bookish Metal' },
        update: {},
        create: {
            title: 'Bookish Metal',
            image: 'https://i.etsystatic.com/31418112/r/il/5cd433/5172110458/il_1588xN.5172110458_rlbb.jpg',
            description: 'Set of 3 Bookish Metal | One Line Art | Bookish Art | Library Decor',
            price: 92,
            available: true,
            returnPolicy: true,
            quantity: 54,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Tote Bag' },
        update: {image: "https://i.etsystatic.com/42334588/r/il/4e9d7a/5615672937/il_1588xN.5615672937_g3gx.jpg"},
        create: {
            title: 'Tote Bag',
            description: 'Books Tote Bag| Trendy Aesthetic For Book Lovers',
            price: 12,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Retro Ceramic Teapot' },
        update: {},
        create: {
            title: 'Retro Ceramic Teapot',
            image: "https://i.etsystatic.com/18448702/r/il/cdbee5/5485739396/il_1588xN.5485739396_1l8o.jpg",
            description: 'Retro Ceramic Handmade Teapot | Food Safe',
            price: 20,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Vintage Style Floral Curtains' },
        update: {},
        create: {
            title: 'Vintage Style Floral Curtains',
            image: "https://i.etsystatic.com/11986500/r/il/6da013/2271874143/il_1588xN.2271874143_jz59.jpg",
            description: 'Small Print Floral Curtains | Single Planel | 120 Inch Length',
            price: 36,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Glass Vase Plant Pot' },
        update: {},
        create: {
            title: 'Glass Vase Plant Pot',
            image: "https://i.etsystatic.com/37557891/r/il/5ff4fa/5235501137/il_1588xN.5235501137_fo65.jpg",
            description: 'Glass Terrarium | Plant Propagation Stand',
            price: 27,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Wavy Plant Stand' },
        update: {},
        create: {
            title: 'Wavy Plant Stand',
            image: "https://i.etsystatic.com/30991973/r/il/a0967c/5010934521/il_1588xN.5010934521_iqfg.jpg",
            description: 'Plant Stand End Table | 3D Printed',
            price: 40,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });

    await prisma.product.upsert({
        where: { title: 'Insulated Christmas Glass Mug' },
        update: {},
        create: {
            title: 'Insulated Christmas Glass Mug',
            image: "https://i.etsystatic.com/27059597/r/il/954e85/2912231768/il_1588xN.2912231768_6h0w.jpg",
            description: 'Hand Blown Glass | Mug with Silicone Lid',
            price: 25,
            available: true,
            returnPolicy: false,
            quantity: 100,
            categoryId: 4
        }
    });


    //seeding users table with a cart and products inside
    //users with no admin permissions
    await prisma.user.upsert({
        where: { username: 'StellaP' },
        update: {},
        create: {
            username: 'StellaP',
            email: 'stellap@gmail.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 7,
                                quantity: 2
                            },
                            {
                                productId: 12,
                                quantity: 2
                            }
                        ]
                    }
                }
            }
        }
    });
    await prisma.user.upsert({
        where: { username: 'HenryS' },
        update: {},
        create: {
            username: 'HenryS',
            email: 'henrys@yahoo.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 10,
                                quantity: 1
                            },
                            {
                                productId: 3,
                                quantity: 1
                            },
                            {
                                productId: 11,
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        }
    });
    await prisma.user.upsert({
        where: { username: 'Melissa' },
        update: {},
        create: {
            username: 'Melissa',
            email: 'melissa2@gmail.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 2,
                                quantity: 5
                            },
                            {
                                productId: 4,
                                quantity: 2
                            },
                            {
                                productId: 8,
                                quantity: 1
                            },
                            {
                                productId: 12,
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        }
    });


    //user with admin permission
    await prisma.user.upsert({
        where: { username: 'secretAdmin' },
        update: {},
        create: {
            username: 'secretAdmin',
            email: 'secretAdmin@secret.com',
            hashedPassword: 'secretAdminPassword',
            isAdmin: true
        }
    });

    //user with admin permission & hashed password
    async function createAdmin() {
       const  hashedPassword = await bcrypt.hash("admin", SALT_COUNT);
        await prisma.user.upsert({
            where: { username: 'Administrator' },
            update: {},
            create: {
                username: 'Administrator',
                email: 'admin@secret.com',
                hashedPassword: hashedPassword,
                isAdmin: true
            }
        });
    }
    createAdmin();

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })

