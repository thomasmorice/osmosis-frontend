import Image from "next/image";
import React, { FunctionComponent } from "react";
import { Cell } from "./types";

export const AssetCell: FunctionComponent<Partial<Cell>> = ({
  coinDenom,
  chainName,
  coinImageUrl = "/icons/OSMO.svg",
  isCW20 = false,
}) =>
  coinDenom ? (
    <div className="flex gap-4">
      <Image alt={coinDenom} src={coinImageUrl} height={40} width={40} />
      <div className="flex flex-col place-content-center">
        <div className="flex">
          <span className="text-subtitle1 text-white-high">{coinDenom}</span>
          {isCW20 && (
            <div className="ml-2 px-2 py-1 rounded-full font-title text-xs bg-primary-200">
              CW20
            </div>
          )}
        </div>
        {chainName && (
          <span className="text-body2 text-iconDefault">{chainName}</span>
        )}
      </div>
    </div>
  ) : (
    <span>{coinDenom}</span>
  );
