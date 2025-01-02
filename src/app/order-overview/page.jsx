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

                    <li class="text-gray-500">
                        <a href="my-order-history.html">My Order History</a>
                    </li>

                    <li>
                        <span class="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li class="text-gray-500">Order Overview</li>
                </ul>
            </nav>

            <section
                class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >

                <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                    <div class="border-b py-5">
                        <div class="flex items-center">
                            <img
                                width="40px"
                                height="40px"
                                class="rounded-full object-cover"
                                src="./assets/images/avatar-photo.png"
                                alt="Red woman portrait"
                            />
                            <div class="ml-5">
                                <p class="font-medium text-gray-500">Hello,</p>
                                <p class="font-bold">Sarah Johnson</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <div class="flex w-full">
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="account-page.html"
                                        class="flex items-center gap-2 font-medium"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                            />
                                        </svg>
                                        Manage account</a
                                    >
                                    <a
                                        href="profile-information.html"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Profile information</a
                                    >
                                    <a
                                        href="manage-address.html"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Manage Addresses</a
                                    >
                                    <a
                                        href="change-password.html"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Change password</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <a
                                    href="my-order-history.html"
                                    class="flex items-center gap-2 font-medium text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    My Order History</a
                                >
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <a
                                    href="payment-methods.html"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                        />
                                    </svg>

                                    Payment Methods</a
                                >
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <a
                                    href="wishlist.html"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>

                                    My Wishlist</a
                                >
                            </div>
                        </div>
                    </div>

                    <div class="flex py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <a
                                    href="#"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>

                                    Log Out</a
                                >
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    class="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden"
                >


                    <div class="flex w-full border px-4 py-4">
                        <img
                            class="self-start object-contain"
                            width="90px"
                            src="./assets/images/bedroom.png"
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
                            src="./assets/images/product-chair.png"
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
                            src="./assets/images/outdoors.png"
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
                            src="./assets/images/matrass.png"
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

                <section class="w-full max-w-[1200px] gap-3 px-5 pb-10">
                    <table class="hidden w-full md:table">
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
                                            src="./assets/images/bedroom.png"
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
                                            src="./assets/images/product-chair.png"
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
                                            src="./assets/images/outdoors.png"
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
                                            src="./assets/images/matrass.png"
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


                    <section class="my-5 flex w-full flex-col gap-4 lg:flex-row">
                        <div class="lg:w-1/2">
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



                        <div class="lg:w-1/2">
                            <div class="border py-5 px-4 shadow-md">
                                <p class="font-bold">ORDER INFORMATION</p>

                                <div>
                                    <p>Order &num;1245</p>
                                </div>

                                <div class="flex flex-col border-b py-5">
                                    <p>
                                        Status:
                                        <span class="font-bold text-green-600">Delivered</span>
                                    </p>

                                    <p>Date: 20/12/2023</p>
                                </div>

                                <div></div>

                                <div class="flex flex-col border-b py-5">
                                    <p class="font-bold">ADDRESS INFORMATION</p>
                                    <p>Country: Serbia</p>
                                    <p>City: Belgrade</p>
                                    <p>Zip-Code: 125647</p>
                                    <p>Delivery: UPS</p>
                                </div>

                                <div class="flex flex-col py-5">
                                    <p class="font-bold">PAYMENT INFORMATION</p>
                                    <p>Payment method: Credit Card</p>
                                    <p>Card Holder: Sarah Johnson</p>
                                    <p>Card number: &bull;&bull;&bull;&bull; 4214</p>
                                </div>
                            </div>
                        </div>


                    </section>
                </section>


            </section>
        </>
    )
}
