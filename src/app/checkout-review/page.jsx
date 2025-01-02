import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul class="flex items-center">
                    <li class="cursor-pointer">
                        <a href="index.html">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <span class="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li class="text-gray-500">Checkout</li>
                </ul>
            </nav>


            <div class="flex-grow">
                <section
                    class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
                >
                    <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
                        Checkout Review
                    </h2>

                    <section
                        class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
                    >
                        <table class="hidden lg:table">
                            <thead class="h-16 bg-neutral-100">
                                <tr>
                                    <th>ADDRESS</th>
                                    <th>DELIVERY METHOD</th>
                                    <th>PAYMENT METHOD</th>
                                    <th class="bg-neutral-600 text-white">ORDER REVIEW</th>
                                </tr>
                            </thead>
                        </table>


                        <section
                            class="container mx-auto my-3 flex w-full flex-col gap-3 md:hidden"
                        >


                            <div class="flex w-full border px-4 py-4">
                                <img
                                    class="self-start object-contain"
                                    width="90px"
                                    src="./images/bedroom.png"
                                    alt="bedroom image"
                                />
                                <div class="ml-3 flex w-full flex-col justify-center">
                                    <div class="flex items-center justify-between">
                                        <p class="text-xl font-bold">ITALIAN BED</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="text-sm text-gray-400">Size: XL</p>
                                    <p class="py-3 text-xl font-bold text-violet-900">$320</p>
                                    <div class="mt-2 flex w-full items-center justify-between">
                                        <div class="flex items-center justify-center">
                                            <div
                                                class="flex cursor-text items-center justify-center active:ring-gray-500"
                                            >
                                                Quantity: 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="flex w-full border px-4 py-4">
                                <img
                                    class="self-start object-contain"
                                    width="90px"
                                    src="./images/product-chair.png"
                                    alt="Chair image"
                                />
                                <div class="ml-3 flex w-full flex-col justify-center">
                                    <div class="flex items-center justify-between">
                                        <p class="text-xl font-bold">GUYER CHAIR</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="text-sm text-gray-400">Size: XL</p>
                                    <p class="py-3 text-xl font-bold text-violet-900">$320</p>
                                    <div class="mt-2 flex w-full items-center justify-between">
                                        <div class="flex items-center justify-center">
                                            <div
                                                class="flex cursor-text items-center justify-center active:ring-gray-500"
                                            >
                                                Quantity: 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="flex w-full border px-4 py-4">
                                <img
                                    class="self-start object-contain"
                                    width="90px"
                                    src="./images/outdoors.png"
                                    alt="Outdoor chair image"
                                />
                                <div class="ml-3 flex w-full flex-col justify-center">
                                    <div class="flex items-center justify-between">
                                        <p class="text-xl font-bold">OUTDOOR CHAIR</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="text-sm text-gray-400">Size: XL</p>
                                    <p class="py-3 text-xl font-bold text-violet-900">$320</p>
                                    <div class="mt-2 flex w-full items-center justify-between">
                                        <div class="flex items-center justify-center">
                                            <div
                                                class="flex cursor-text items-center justify-center active:ring-gray-500"
                                            >
                                                Quantity: 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="flex w-full border px-4 py-4">
                                <img
                                    class="self-start object-contain"
                                    width="90px"
                                    src="./images/matrass.png"
                                    alt="Matrass image"
                                />
                                <div class="ml-3 flex w-full flex-col justify-center">
                                    <div class="flex items-center justify-between">
                                        <p class="text-xl font-bold">MATRASS COMFORT &plus;</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="text-sm text-gray-400">Size: XL</p>
                                    <p class="py-3 text-xl font-bold text-violet-900">$320</p>
                                    <div class="mt-2 flex w-full items-center justify-between">
                                        <div class="flex items-center justify-center">
                                            <div
                                                class="flex cursor-text items-center justify-center active:ring-gray-500"
                                            >
                                                Quantity: 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <table class="mt-3 hidden w-full lg:table">
                            <thead class="h-16 bg-neutral-100">
                                <tr>
                                    <th>ITEM</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr class="h-[100px] border-b">
                                    <td class="align-middle">
                                        <div class="flex">
                                            <img
                                                class="w-[90px]"
                                                src="./images/bedroom.png"
                                                alt="bedroom image"
                                            />
                                            <div class="ml-3 flex flex-col justify-center">
                                                <p class="text-xl font-bold">ITALIAN BED</p>
                                                <p class="text-sm text-gray-400">Size: XL</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                    <td class="text-center align-middle">1</td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                </tr>



                                <tr class="h-[100px] border-b">
                                    <td class="align-middle">
                                        <div class="flex">
                                            <img
                                                class="w-[90px]"
                                                src="./images/product-chair.png"
                                                alt="Chair Image"
                                            />
                                            <div class="ml-3 flex flex-col justify-center">
                                                <p class="text-xl font-bold">GUYER CHAIR</p>
                                                <p class="text-sm text-gray-400">Size: XL</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                    <td class="text-center align-middle">1</td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                </tr>



                                <tr class="h-[100px] border-b">
                                    <td class="align-middle">
                                        <div class="flex">
                                            <img
                                                class="w-[90px]"
                                                src="./images/outdoors.png"
                                                alt="Outdoor furniture"
                                            />
                                            <div class="ml-3 flex flex-col justify-center">
                                                <p class="text-xl font-bold">OUTDOOR CHAIR</p>
                                                <p class="text-sm text-gray-400">Size: XL</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                    <td class="text-center align-middle">1</td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                </tr>



                                <tr class="h-[100px]">
                                    <td class="align-middle">
                                        <div class="flex">
                                            <img
                                                class="w-[90px]"
                                                src="./images/matrass.png"
                                                alt="Matrass Image"
                                            />
                                            <div class="ml-3 flex flex-col justify-center">
                                                <p class="text-xl font-bold">MATRASS COMFORT &plus;</p>
                                                <p class="text-sm text-gray-400">Size: XL</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                    <td class="text-center align-middle">1</td>
                                    <td class="mx-auto text-center">&#36;320</td>
                                </tr>
                            </tbody>
                        </table>


                        <div class="flex w-full items-center justify-between">
                            <Link
                                href="catalog"
                                class="hidden text-sm text-violet-900 lg:block"
                            >&larr; Back to the shop</Link      >

                            <div class="mx-auto flex justify-center gap-2 lg:mx-0">
                                <Link
                                    href="checkout-payment"
                                    class="bg-purple-900 px-4 py-2 text-white"
                                >Previous step</Link >

                                <Link
                                    href="checkout-confirmation"
                                    class="bg-amber-400 px-4 py-2"
                                >Place Order</Link >
                            </div>
                        </div>
                    </section>

                    <section class="mx-auto w-full px-4 md:max-w-[400px]">
                        <div class="">
                            <div class="border py-5 px-4 shadow-md">
                                <p class="font-bold">ORDER SUMMARY</p>

                                <div class="flex justify-between border-b py-5">
                                    <p>Subtotal</p>
                                    <p>$1280</p>
                                </div>

                                <div class="flex justify-between border-b py-5">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>

                                <div class="flex justify-between py-5">
                                    <p>Total</p>
                                    <p>$1280</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>



                <section
                    class="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row"
                >


                    <div
                        class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                    >
                        <div class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 text-violet-900 lg:mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                        </div>

                        <div class="ml-6 flex flex-col justify-center">
                            <h3 class="text-left text-xs font-bold lg:text-sm">
                                Free Delivery
                            </h3>
                            <p class="text-light text-center text-xs lg:text-left lg:text-sm">
                                Orders from $200
                            </p>
                        </div>
                    </div>


                    <div
                        class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                    >
                        <div class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 text-violet-900 lg:mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                />
                            </svg>
                        </div>

                        <div class="ml-6 flex flex-col justify-center">
                            <h3 class="text-left text-xs font-bold lg:text-sm">
                                Money returns
                            </h3>
                            <p class="text-light text-left text-xs lg:text-sm">
                                30 Days guarantee
                            </p>
                        </div>
                    </div>



                    <div
                        class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
                    >
                        <div class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 text-violet-900 lg:mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                />
                            </svg>
                        </div>

                        <div class="ml-6 flex flex-col justify-center">
                            <h3 class="text-left text-xs font-bold lg:text-sm">
                                24/7 Supports
                            </h3>
                            <p class="text-light text-left text-xs lg:text-sm">
                                Consumer support
                            </p>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}
