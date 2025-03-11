import CampaignsCard from "../../Cards/CampaignsCard"
const Campaigs = () => {
  return (
      <div className="w-[30%] flex flex-col gap-6 bg-white items-center justify-center rounded-xl py-6">
          <div className="flex flex-col w-[90%] justify-center gap-5 ">
              <h1 className="text-lg font-semibold  text-gray">Latest Campaigns</h1>
              <div className="flex flex-col justify-center items-center gap-5">
                  <CampaignsCard />
                  <CampaignsCard />
                  <CampaignsCard />               
              </div>
          </div>   
          <div className="flex flex-col w-[90%] justify-center gap-5 ">
              <h1 className="text-lg font-semibold  text-gray">Populare Campaigns</h1>
              <div className="flex flex-col justify-center items-center gap-5">
                  <CampaignsCard />
                  <CampaignsCard />
                  <CampaignsCard />               
              </div>
          </div>   
          
    </div>
  )
}

export default Campaigs
