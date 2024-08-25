export type RoomType = 
| 'pgB1'
| 'pgB2'
| 'pgB3'
| 'hostelB1'
| 'hostelB2'
| 'hostelB3'
| 'flatB1'
| 'flatB2'
| 'flatB3'
| 'rkB1'
| 'rkB2'
| 'rkB3'
|""

export const getRoomType = (roomType:RoomType)=>{
    switch(roomType){
        case 'pgB1':
            return 'PG-Single Bed'
        case 'pgB2':
            return 'PG-Double Bed'
        case 'pgB3':
            return 'PG-Triple Bed'
        case 'hostelB1':
            return 'Hostel-Sigle Bed'
        case 'hostelB2':
            return 'Hostel-Double Bed'
        case 'hostelB3':
            return 'Hostel-Triple Bed'
        case 'flatB1':
            return 'Flat-1 BHK'
        case 'flatB2':
            return 'Flat-2 BHK'
        case 'flatB3':
            return 'Flat-3 BHK'
        case 'rkB1':
            return 'Rooms and kitchen-Single'
        case 'rkB2':
            return 'Rooms and kitchen-Double'
        case 'rkB3':
            return 'Rooms and kitchen-Triple'
        default:
            return ''
    }
}