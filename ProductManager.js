class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 0
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Hay errores en algunos campos, intenta de nuevo...")
        } else {
            const id = this.nextId++
            const product = {
                id, title, description, price, thumbnail, code, stock
            }
            this.products.push(product)
            return product
        }
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === parseInt(id))
        if (product) {
            return product
        } else {
            throw new Error("Ocurrio un error al buscar el producto.")
        }
    }
    updateProduct(id, field, value) {
        const product = this.products.find(product => product.id === id)
        if (product) {
            if (product[field] == id) {
                throw new Error("Error, no podes modificar el id del producto")
            } else {
                product[field] = value
            }
        }
        return product
    }
    deleteProduct(id) {
        const product = this.products.find(product => product.id === id)
        const index = this.products.indexOf(product)
        if (!product) {
            throw new Error("No se puede encontrar el producto")
        } else {
            this.products.splice(index, 1)
        }
        return product
    }
}


//instancia de creacion
const pManager = new ProductManager()

//add product
pManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

//listar productos y traerlos
const productsList = pManager.getProducts()
console.log(productsList);

//traer producto
try {
    const productFound = pManager.getProductById(0)
    console.log("Product encontrado", productFound);
} catch (error) {
    console.log(error);
}

//actualizacion y muestra de dicha actualizacion
try {
    const updating = pManager.updateProduct(0, "title", "Nuevo nombre")
    console.log("Producto actualizado:", updating);
} catch (error) {
    console.log(error)
}

//imposibilidad de modificar el id
try {
    const updating = pManager.updateProduct(0, "id", 3)
    console.log("Producto actualizado:", updating);
} catch (error) {
    console.log(error)
}

//eliminar producto con error
try {
    const deleting = pManager.deleteProduct(1)
    console.log("Producto eliminado:", deleting);
} catch (error) {
    console.log(error)
}

//eliminar producto efectivamente
try {
    const deleting = pManager.deleteProduct(0)
    console.log("Producto eliminado:", deleting);
} catch (error) {
    console.log(error)
}