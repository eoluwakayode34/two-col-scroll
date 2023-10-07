
'use client';
import classNames from "classnames"
import { useInView } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"
import { useFeatureStore } from "./store";

export const FeatureTitle = ({children, id}: {children: ReactNode, id: string}) => {
const ref = useRef<HTMLParagraphElement>(null);
const isInvView = useInView(ref, {margin: "-50% 0px -50% 0px"});
const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
const inViewFeature = useFeatureStore(state => state.inViewFeature);

useEffect(() => {
    if(isInvView) setInViewFeature(id);
    if(!isInvView && inViewFeature === id) setInViewFeature(null)
}, [isInvView, id, setInViewFeature, inViewFeature])


    return (
        <p ref={ref}
className={classNames("py-8 font-heading font-bold text-5xl", isInvView ? "text-blue-500" : "text-gray-300 opacity-40")}>{children}</p>
    )
}