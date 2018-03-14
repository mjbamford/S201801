json.extract! product, :id, :price, :name, :sku, :created_at, :updated_at
json.url product_url(product, format: :json)
