import Campaign from "./Campaign";
import Donors from "./Rapport";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";
import { getCampaingsByOrganizationId } from "../../../Redux/APICalls/campaignsCall";

const Overview = () => {
  const dispatch = useDispatch();
  const { campaigns = [] } = useSelector((state) => state.campaigns);
  const { org } = useSelector((state) => state.orgauth);

  useEffect(() => {
      dispatch(getCampaingsByOrganizationId(org._id));
      console.log(campaigns)
  }, [org, dispatch]);
  return (
    <>
    {
      campaigns? (
        <div className="flex flex-col gap-8 mt-28 ml-[15%]">
      <div className="flex px-6 gap-6 items-end">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Your Campaigns</h3>
          </div>
          <div className="flex gap-3">
            <Campaign campaign = {campaigns[0]} />

          </div>
        </div>
        <Donors />
      </div>
    </div>
      ):(
        <div>
          nothing
        </div>
      )
    }
    </>
  );
};

export default Overview;
