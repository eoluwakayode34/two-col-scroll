"use client"
import classNames from "classnames"
import { ReactNode } from "react"
import { useFeatureStore } from "./store";

type FeatureCardProps = {
    gradient: string,
    children: ReactNode
} & CardProps;

type CardProps = {
    id: string;
}
export const Featurecard = ({gradient, children, id}:FeatureCardProps) => {

    const isInViewFeature = useFeatureStore(state => state.inViewFeature)
    return <div className={classNames("absolute inset-0  h-full w-full rounded-2xl bg-gradient-to-br transition-opacity  ", gradient, id === isInViewFeature ? "opacity-100" : "opacity-0" )}>{children}</div>
}


export const Card1 = ({id}: CardProps) => {
    return <Featurecard  id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
                <span/>
    </Featurecard>
}
export const Card2 = ({id}: CardProps) => {
    return <Featurecard  id={id} gradient="from-[#f5f4f7] to-[#adf8f4]">
                <span/>
    </Featurecard>
}
export const Card3 = ({id}: CardProps) => {
    return <Featurecard  id={id} gradient="from-[#f5f1f7] to-[#edf8ff]">
                <span/>
    </Featurecard>
}
export const Card4 = ({id}: CardProps) => {
    return <Featurecard  id={id} gradient="from-[#f5f337] to-[#ad3f3f]">
                <span/>
    </Featurecard>
}