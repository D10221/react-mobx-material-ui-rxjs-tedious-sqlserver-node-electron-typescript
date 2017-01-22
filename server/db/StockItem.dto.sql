if(exists(select * from sys.tables where name = 'StockItems'))
drop table StockItems
go
create table StockItems (
	Id int NOT NULL IDENTITY(1,1),
	Picture VARCHAR(MAX),
	Supplier VARCHAR(MAX),
	StockNumber3M VARCHAR(MAX),
	StockNumberDelta VARCHAR(MAX),
	[DESCRIPTION] VARCHAR(MAX),
	StockStatus VARCHAR(MAX),
	UnitBox int,
	BoxesCase VARCHAR(MAX),
	Qty int,
	SellingUnit VARCHAR(MAX),
	Discount float,
	PERCaseRSPExcl float,
	NetPrice float,
	PEREachRSPExcl float
)
go
insert into StockItems (
	-- Id 
	-- Picture 
	-- Supplier,
	StockNumber3M,
	-- StockNumberDelta,
	[DESCRIPTION],
	StockStatus,
	UnitBox,
	BoxesCase,
	Qty,
	SellingUnit,
	Discount,
	PERCaseRSPExcl,
	NetPrice,
	PEREachRSPExcl
)
values 
(
  'GT500013286',
  '3M™ Aura™ 9310+ DUST/MIST FOLDABLE UNVALVED RESPIRATOR FFP1',
  'N', --StockStatus
  20, --UnitBox
  12, -- BoxesCase
  240, -- Qty
  'Case', --SellingUint
  30, --Discount
  9112.24, -- PERCaseRSPExcl
  6378.57,-- NetPrice
  26.58 --PEREachRSPExcl
),
(
	'GT500073181','3M™ Aura™ 9312+ DUST/MIST FOLDABLE VALVED RESPIRATOR FFP1','N',10,12,120, 'Case',30,5695.15,3986.60,33.22 
),
( 
'GT500073165','3M™ Aura™ 9320+ DUST/MIST FOLDABLE UNVALVED RESPIRATOR FFP2','N', 20,12,240,'Case',30,9112.24,6378.57,26.58
),
(
'GT500073439','3M™ Aura™ 9322+ DUST/MIST FOLDABLE VALVED RESPIRATOR FFP2','S',10,12,120,'Case',30,5410.39,3787.27,31.56 
),
(
'GT500073132','3M™ Aura™ 9332+ DUST/MIST/METAL FUME FOLDABLE VALVED RESPIRATOR FFP3','S',10,12,120,'Case',30,8927.39,6249.17,52.08 
)
GO
select  * from StockItems