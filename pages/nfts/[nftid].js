import      Header from ' ../ ../component/Header'
import { useEffect, useMemo, useState } from 'react' 
import { useWeb3 } from '@3rdweb/hooks' 
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import { text } from 'stream/consumers'
import { Container } from 'postcss'
import NFTimage from '../../components/nft/NFTimage'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectNft] = useState()
    const [listings, setListings] = useState([])
    const router = useRouter()

    const nftModule = useMemo(() => {
if (!provider) return

const sdk = new ThirdwebSDK(
    provider.getSigned(),
    'https://eth-rinkeby.alchemyapi.io/v2/Nhj3aLHM15v5ZCWbu3nNwjRPD4I0PM2e'

)
return sdk.getNFTModule('0x9829D81795ed44f53C9F7c1DeC72637Ef81c063d')
    }, [provider])

    // get all NFT's in the collection 

    useEffect(() => {
        if (!nftModule) return
        ;(async () => {
        const nfts = await nftModule.getAll()

        const selectedNftArray = nft.filter(
            (nft) => nft.id === router.query.assetId
        )
        setSelectNft(selectedNftArray[0])
    })()
}, [nftModule])

const marketPlaceModule = useMemo(() => {
if (provider) return

const sdk = new ThirdwebSDK(
    provider.getSigner(),
    'https://eth-rinkeby.alchemyapi.io/v2/Nhj3aLHM15v5ZCWbu3nNwjRPD4I0PM2e'
)
return sdk.getMarketplaceModule(
    '0x767936d65e94E3700A5AacB17302D6906F81647f'
)
    }, [provider])


useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () =>{
setListings(await marketPlaceModule.getAllListings())
        })()
}, [marketPlaceModule])

return (
<div>
    <Header />
    <NFTimage />

    </div>
)
}


export default Nft

