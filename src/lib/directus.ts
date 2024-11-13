import {
  createDirectus,
  staticToken,
  rest,
  authentication,
  readItems,
  readCollection,
} from "@directus/sdk";

const apiClient = process.env.DIRECTUS_API_TOKEN!
  ? createDirectus(process.env.DIRECTUS_API_URL!)
      .with(staticToken(process.env.DIRECTUS_API_TOKEN!))
      .with(rest())
  : undefined;

const userClient = createDirectus(process.env.DIRECTUS_API_URL!)
  .with(authentication())
  .with(rest());

export default apiClient;

const categories: any = "Categories";
const subcategories: any = "SubCategories";
const products: any = "Products";

export async function getSub(parentId: string) {
  return apiClient?.request(
    readItems(subcategories, {
      filter: {
        Parent_Category: {
          _eq: parentId,
        },
      },
    })
  );
}

export async function getProducts(parentId: string) {
  return apiClient?.request(
    readItems(products, {
      filter: {
        Product_Category: {
          _eq: parentId,
        },
        Segment: {
          _null: false,
        },
      },
    })
  );
}

export async function getAllProducts() {
  return apiClient?.request(
    readItems(products, {
      fields: ["*", "Product_Category.*"],
      filter: {
        Segment: {
          _null: false,
        },
      },
    })
  );
}

export async function getCat(category: string) {
  return apiClient?.request(
    readItems(categories, {
      // fields: ["id"],
      filter: {
        Name: {
          _eq: category,
        },
      },
    })
  );
}
export async function getCats() {
  return apiClient?.request(
    readItems(categories, {
      fields: ["id", "Sub_Categories.*", "Name"],
    })
  );
}

export async function samProd() {
  return apiClient?.request(
    readItems(products, {
      fields: ["Product_Category.*"],
    })
  );
}

export async function checkProds() {
  return apiClient?.request(
    readItems(products, {
      fields: ["Segment", "Product_Category"],
    })
  );
}

export async function getCategories() {
  return apiClient?.request(
    readItems(categories, {
      fields: ["*", "Sub_Categories.*"],
    })
  );
}
