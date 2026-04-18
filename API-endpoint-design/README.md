# RESTful API Endpoint Design - Online Store

## 1. Conceptual Setup

### 1.1 Resource Identification

Entitas data utama (Resources) yang dikelola oleh API ini:

- Users
- Products
- Orders

### 1.2 Base URI & Versioning

Semua endpoint menggunakan struktur versioning untuk memastikan backward compatibility. Base URL yang digunakan adalah:

> https://api.onlinestore.com/api/v1

---

## 2. API Endpoints

### 2.1 Read Operations (GET)

| Method | Endpoint                                                    | Deskripsi                                                  |
| ------ | ----------------------------------------------------------- | ---------------------------------------------------------- |
| GET    | `/v1/products`                                              | Mengambil daftar semua produk.                             |
| GET    | `/v1/products/:id`                                          | Mengambil detail spesifik dari satu produk berdasarkan ID. |
| GET    | `/v1/products?category=electronics&sort=price_asc&limit=10` | Mengambil daftar produk menggunakan parameter kueri.       |

### 2.2 Write Operations (POST, DELETE)

| Method | Endpoint         | Deskripsi                                             |
| ------ | ---------------- | ----------------------------------------------------- |
| POST   | `/v1/orders`     | Membuat pesanan baru dengan mengirimkan payload JSON. |
| DELETE | `/v1/orders/:id` | Menghapus pesanan spesifik berdasarkan ID.            |

### 2.3 Hierarchy & Nested Resources

| Method | Endpoint                          | Deskripsi                                           |
| ------ | --------------------------------- | --------------------------------------------------- |
| GET    | `/v1/users/:userId/orders`        | Mengambil daftar pesanan milik pengguna spesifik.   |
| GET    | `/v1/products/:productId/reviews` | Mengambil daftar ulasan untuk satu produk spesifik. |

---

## 3. HTTP Status Codes Mapping

| Status Code               | Kondisi      | Deskripsi                                               |
| ------------------------- | ------------ | ------------------------------------------------------- |
| 200 OK                    | Success      | Permintaan GET berhasil diproses.                       |
| 201 Created               | Success      | Permintaan POST berhasil dan resource baru dibuat.      |
| 400 Bad Request           | Client Error | Permintaan ditolak karena data/format tidak valid.      |
| 404 Not Found             | Client Error | Resource yang diminta tidak ditemukan di server.        |
| 500 Internal Server Error | Server Error | Terjadi kegagalan atau crash pada sisi server/database. |
