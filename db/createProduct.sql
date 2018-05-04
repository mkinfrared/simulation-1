INSERT INTO products (image_url, brand_name, model_name, price)
VALUES ($1, $2, $3, $4)
returning  * ;