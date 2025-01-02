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

                    <li class="text-gray-500">Account</li>
                </ul>
            </nav>

            <section
                class="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >

                <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                    <div class="border-b py-5">
                        <div class="flex items-center">
                            <img
                                width="40px"
                                height="40px"
                                class="rounded-full object-cover"
                                src="./images/avatar-photo.png"
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
                                    <Link
                                        href="#"
                                        class="flex items-center gap-2 font-medium text-violet-900"
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
                                        Manage account</Link >
                                    <Link
                                        href="profile-information"
                                        class="active:blue-900 text-gray-500 duration-100 hover:text-yellow-400"
                                    >Profile information</Link>
                                    <Link
                                        href="manage-address"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Manage Addresses</Link >
                                    <Link
                                        href="change-password"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Change password</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="my-order-history"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
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

                                    My Order History</Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="payment-methods"
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

                                    Payment Methods</Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="wishlist"
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

                                    My Wishlist</Link>
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

                <div class="mb-5 flex items-center justify-between px-5 md:hidden">
                    <div class="flex gap-3">
                        <div class="py-5">
                            <div class="flex items-center">
                                <img
                                    width="40px"
                                    height="40px"
                                    class="rounded-full object-cover"
                                    src="./images/avatar-photo.png"
                                    alt="Red woman portrait"
                                />
                                <div class="ml-5">
                                    <p class="font-medium text-gray-500">Hello,</p>
                                    <p class="font-bold">Sarah Johnson</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <button class="border bg-amber-400 py-2 px-2">
                            Profile settings
                        </button>
                    </div>
                </div>

                <section
                    class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3"
                >
                    <div class="">
                        <div class="border py-5 shadow-md">
                            <div class="flex justify-between px-4 pb-5">
                                <p class="font-bold">Personal Profile</p>
                                <a
                                    class="text-sm text-violet-900"
                                    href="profile-information.html"
                                >Edit</a
                                >
                            </div>

                            <div class="px-4">
                                <p>Sarah Johnson</p>
                                <p>sarah@yandex.com</p>
                                <p>20371</p>
                                <p class="">1223 3432 3344 0082</p>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div class="border py-5 shadow-md">
                            <div class="flex justify-between px-4 pb-5">
                                <p class="font-bold">Shipping Address</p>
                                <a class="text-sm text-violet-900" href="manage-address.html"
                                >Edit</a
                                >
                            </div>

                            <div class="px-4">
                                <p>Sarah Johnson</p>
                                <p>Belgrade, Serbia</p>
                                <p>20371</p>
                                <p>1223 3432 3344 0082</p>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div class="border py-5 shadow-md">
                            <div class="flex justify-between px-4 pb-5">
                                <p class="font-bold">Billing Address</p>
                                <a class="text-sm text-violet-900" href="#">Edit</a>
                            </div>

                            <div class="px-4">
                                <p>Sarah Johnson</p>
                                <p>Belgrade, Serbia</p>
                                <p>20371</p>
                                <p>1223 3432 3344 0082</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
