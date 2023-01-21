import React from 'react'
import Giscus, { Repo, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';
export const Comment = () => {
    const {theme} = useTheme()
    return (
        <Giscus
            key="comment"
            repo="Rendyfranzz/Web"
            repoId="R_kgDOIxf7jw"
            category='General'
            categoryId='DIC_kwDOE66rZ84B--B0'
            mapping='pathname'
            reactionsEnabled='1'
            emitMetadata='0'
            theme={theme as Theme}
        />
    )
}
