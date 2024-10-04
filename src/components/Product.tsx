"use client"
import { products } from "@/lib/constant"
import Link from "next/link"

export default function Product({ productName }: { productName: string }) {
  const product = products.find((prod) => prod.link === `/${productName}`)

  if (!product) {
    return (
      <section className="bg-white dark:bg-gray-900 h-[calc(100vh-64px)] flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              Opps!
            </h1>
            <p className="mb-6 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Product Not Found
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {`Sorry, we can't find that product. You'll find lots to explore on the
            home page.`}{" "}
            </p>
            <Link
              href="/#products"
              className="inline-flex bg-primaryOrange text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <Link
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg"
            >
              <img
                alt={image.alt}
                src={image.src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              More Details
            </p>
            <form className="mt-10">
              {/* formula */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    Formulas Content
                  </h3>
                  <span className="text-sm font-medium text-primaryOrange hover:text-indigo-500">
                    %
                  </span>
                </div>
                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.formula.map((size) => (
                      <div
                        key={size.name}
                        className="group relative flex items-center justify-between rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none"
                      >
                        <span>{size.name}</span>
                        <span>{size.percent}</span>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <Link href={"tel:+918923165656"} target="_blank">
                <button
                  type="button"
                  className="mt-10 flex w-full items-center justify-center rounded-md bg-primaryOrange px-8 py-3 text-base font-medium text-white hover:bg-transparent border-2 border-primaryOrange hover:text-primaryOrange focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:ring-offset-2"
                >
                  Request for Price
                </button>
              </Link>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded-md bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-transparent border-2 border-green-500 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Message on WhatsApp
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
