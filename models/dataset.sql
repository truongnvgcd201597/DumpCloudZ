CREATE TABLE public.product (id INT, name VARCHAR(50), quantity INT, price INT, shop INT);
CREATE TABLE public.shop (id INT, name VARCHAR(50), address VARCHAR(255),contact VARCHAR(255));
CREATE TABLE public.users (id INT, name VARCHAR(50), shop INT,password VARCHAR(255), role VARCHAR(255));


INSERT INTO public.shop VALUES (1, 'ATN Tran Phu', 'Da Nang', '0123456789');
INSERT INTO public.shop VALUES (2, 'ATN Truong Thi', 'Nghe An', '0198765432');
INSERT INTO public.shop VALUES (3, 'ATN Hang Bai', 'Ha Noi', '018888888');


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

