CREATE TABLE public.product (id INT, name VARCHAR(50), price INT, quantity INT, shop INT);
CREATE TABLE public.shop (id INT, name VARCHAR(50), address VARCHAR(255),contact VARCHAR(255));
CREATE TABLE public.user (id INT, name VARCHAR(50), shop INT,password VARCHAR(255), role varchar(100));

INSERT INTO public.shop (id, name, address, contact) VALUES (1, 'Shop 1', 'Address 1', 'Contact 1');
INSERT INTO public.shop (id, name, address, contact) VALUES (2, 'Shop 2', 'Address 2', 'Contact 2');
INSERT INTO public.shop (id, name, address, contact) VALUES (3, 'Shop 3', 'Address 3', 'Contact 3');

INSERT INTO public.product (id, name, price, quantity, shop) VALUES (1, 'Product 1', 100, 10, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (2, 'Product 2', 200, 20, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (3, 'Product 3', 300, 30, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (4, 'Product 4', 400, 40, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (5, 'Product 5', 500, 50, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (6, 'Product 6', 600, 60, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (7, 'Product 7', 700, 70, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (8, 'Product 8', 800, 80, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (9, 'Product 9', 900, 90, 3);

INSERT INTO public.user (id, name, shop, password, role) VALUES (1, 'User 1', 1, '123456', 'shop');
INSERT INTO public.user (id, name, shop, password, role) VALUES (2, 'User 2', 2, '123456', 'shop');
INSERT INTO public.user (id, name, shop, password, role) VALUES (3, 'User 3', 3, '123456', 'shop');
-- admin
INSERT INTO public.user (id, name, shop, password, role) VALUES (4, 'Admin', 0, '123456', 'admin');
-- //  id: 1,
-- // name: 'shop 1',
-- // address: '123 ABC street',
-- // contact: 'abc@gmail.com'

-- rows: [
--     { id: 1, name: 'thien', shop: 1, passwd: '12345', role: 'shop' },
--     { id: 2, name: 'admin', shop: 0, passwd: '12345', role: 'admin' },
--     { id: 3, name: 'hoang', shop: 2, passwd: '12345', role: 'shop' }
--   ],
--  rows: [
    -- { id: 21, name: 'Batman', price: 1000, quantity: 66, shop: 1 },
    -- { id: 22, name: 'superman', price: 1200, quantity: 56, shop: 1 },
    -- { id: 23, name: 'Spiderman', price: 2800, quantity: 67, shop: 1 },
    -- { id: 28, name: 'Thor', price: 1600, quantity: 64, shop: 1 },
    -- { id: 18, name: 'Car Craft', price: 1000, quantity: 100, shop: 2 },
    -- {
    --   id: 19,
    --   name: 'Airplane Craft',
    --   price: 2000,
    --   quantity: 100,
    --   shop: 2
    -- }
--  {
--       id: 1,
--       name: 'shop 1',
--       address: '123 ABC street',
--       contact: 'abc@gmail.com'
--     },
--     {
--       id: 2,
--       name: 'shop 2',
--       address: '123 ABsC street',
--       contact: 'assbc@gmail.com'
--     }
--   ],
INSERT INTO public.shop VALUES (1, 'ATN 1', 'Da Nang', '0123456789');
INSERT INTO public.shop VALUES (2, 'ATN 2', 'Nghe An', '0198765432');
INSERT INTO public.shop VALUES (3, 'ATN 3', 'Ha Noi', '018888888');


INSERT INTO public.users VALUES(0, 'admin', 0, '123456', 'director');
INSERT INTO public.users VALUES(1, 'atndn', 1, '654321', 'shop');
INSERT INTO public.users VALUES(2, 'atnna', 2, 'qweasd', 'shop');
INSERT INTO public.users VALUES(3, 'atnhn', 3, '123qwe', 'shop');

INSERT INTO public.product VALUES (1, 'Doll', 10, 100, 1);
INSERT INTO public.product VALUES (2, 'Car', 20, 200, 1);
INSERT INTO public.product VALUES (3, 'Ball', 30, 300, 1);

INSERT INTO public.product VALUES (4, 'Doll', 10, 100, 2);
INSERT INTO public.product VALUES (5, 'Car', 20, 200, 2);
INSERT INTO public.product VALUES (6, 'Ball', 30, 300, 2);

INSERT INTO public.product VALUES (7, 'Doll', 10, 100, 3);
INSERT INTO public.product VALUES (8, 'Car', 20, 200, 3);
INSERT INTO public.product VALUES (9, 'Ball', 30, 300, 3);

