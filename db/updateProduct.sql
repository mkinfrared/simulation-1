UPDATE products
SET image_url = $2, brand_name = $3, model_name = $4, price = $5
WHERE product_id = $1
RETURNING *;