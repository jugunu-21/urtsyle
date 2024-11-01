
import { CollectionCard } from "@/components/home/cards/card";
import { api } from "@/trpc/react";
import { Divide } from "lucide-react";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import InteractiveImage from "../shopByLook/shop-by-look";

const App = () => {
    return (
        <DotLottieReact
            className="h-40"
            src="/Animation.lottie"
            loop
            autoplay
        />
    );
};

const CollectionNotFound = () => {
    return (
        <DotLottieReact
            className="h-40"
            src="/Animation (2).lottie"
            loop
            autoplay
        />
    );
};
export function Collection({ categoryQuery, likedQuery }: { categoryQuery?: string, likedQuery?: string }) {
    const { data: response, isLoading, refetch, error } = api.collection.collectionFetch.useQuery({ categoryQuery: categoryQuery, likedQuery: likedQuery });
    if (isLoading) { return <div className="h-64">< App /> </div>; }
    if (error) {
        return <div>Error:
            {error.message}
        </div>;
    }
    if (response?.data.length == 0) {
        return (
            <>
                <div><CollectionNotFound /> </div>
                <div className="flex items-center justify-center"> No results found. Try a different search or browse our collections.
                </div></>
        )
    }
    if (response) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                <div className="sm:col-span-2 sm:row-span-2 w-full h-full aspect-[3/4]">
                    <InteractiveImage look={categoryQuery || ''} />
                </div>
                {response.data.map((productCollection, index) => (
                    <div key={productCollection.name} className="mx-14 my-2 sm:m-0">
                        <div className="m-2">
                            <CollectionCard productColl={productCollection} refetch={refetch} />
                        </div>
                    </div>
                ))}
            </div>



        )
    }
}