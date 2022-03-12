import Header from ' ../ ../component/Header'
import { useEffect, useMemo, useState } from 'react' 
import { useWeb3 } from '@3rdweb/hooks' 
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import { text } from 'stream/consumers'
import { Container } from 'postcss'

const style = {
    wrapper: 'flex flex-col items-center container-lg text-[#e5e8eb]',
    container: 'container p-6',
    topcontent: 'flex',
    nftImgContainer: 'flex-1 mr-4',
    detailsContainer: 'flex-[2] ml-4',
}

const Nft = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectNft] = useState()
    const [listings, setListings] = useState([])
    const router = useRouter()

    const nftModule = useMemo(() => {
if (!provider) return

const sdk = new ThirdwebSDK(
    provider.getSigned()
    ''
)
return sdk.getNFTModule()
    }, [provider])

    // get all NFT's in the collection 

    useEffect(() => {
        if (!nftModule) return
        ;(async () => [
        const nfts = await nftModule.getAll()

        const selectedNftArray = nft.filter(
            (nft) => nft.id == router.query.assetId
        )

    })()
}, [nftModule])


        )


        ]
    }





}