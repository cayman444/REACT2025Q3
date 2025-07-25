import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicle } from '../../services';
import type { IVehicle } from '../../types';

export const DetailsCard = () => {
  const { detailsId } = useParams<{ detailsId: string }>();
  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    if (detailsId) {
      getVehicle(detailsId).then((res) => {
        setVehicle(res.result);
      });
    }
  }, [detailsId]);

  return (
    <div>
      DetailsCard # {detailsId} {vehicle?.properties.name}
    </div>
  );
};
