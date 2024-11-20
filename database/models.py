# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 20, 2024 04:37:44
# Database: sqlite:////tmp/tmp.aYlup0WEer-01JD3XR07DCP3MKMPYKC6VR2T9/WineDiaryApp/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Event(SAFRSBaseX, Base):
    """
    description: This table logs events where wine tastings occur.
    """
    __tablename__ = 'event'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    date = Column(Date, nullable=False)
    location = Column(String(100))

    # parent relationships (access parent)

    # child relationships (access children)
    TastingEventList : Mapped[List["TastingEvent"]] = relationship(back_populates="event")



class Taster(SAFRSBaseX, Base):
    """
    description: This table stores information about individuals who taste wines.
    """
    __tablename__ = 'taster'
    _s_collection_name = 'Taster'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    experience_level = Column(String(50))

    # parent relationships (access parent)

    # child relationships (access children)
    WineReviewList : Mapped[List["WineReview"]] = relationship(back_populates="taster")
    TasterTastingList : Mapped[List["TasterTasting"]] = relationship(back_populates="taster")



class Vineyard(SAFRSBaseX, Base):
    """
    description: This table contains information about vineyards associated with wines.
    """
    __tablename__ = 'vineyard'
    _s_collection_name = 'Vineyard'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    country = Column(String(50))

    # parent relationships (access parent)

    # child relationships (access children)
    WineList : Mapped[List["Wine"]] = relationship(back_populates="vineyard")
    VineyardWineList : Mapped[List["VineyardWine"]] = relationship(back_populates="vineyard")



class WineType(SAFRSBaseX, Base):
    """
    description: This table categorizes wines into different types such as red, white, sparkling, etc.
    """
    __tablename__ = 'wine_type'
    _s_collection_name = 'WineType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(255))

    # parent relationships (access parent)

    # child relationships (access children)



class Wine(SAFRSBaseX, Base):
    """
    description: This table stores information about different wines in the diary.
    """
    __tablename__ = 'wine'
    _s_collection_name = 'Wine'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    varietal = Column(String(50), nullable=False)
    year = Column(Integer)
    vineyard_id = Column(ForeignKey('vineyard.id'))

    # parent relationships (access parent)
    vineyard : Mapped["Vineyard"] = relationship(back_populates=("WineList"))

    # child relationships (access children)
    TastingList : Mapped[List["Tasting"]] = relationship(back_populates="wine")
    VineyardWineList : Mapped[List["VineyardWine"]] = relationship(back_populates="wine")
    WineReviewList : Mapped[List["WineReview"]] = relationship(back_populates="wine")
    WineTastingList : Mapped[List["WineTasting"]] = relationship(back_populates="wine")



class Tasting(SAFRSBaseX, Base):
    """
    description: This table records individual wine tastings, including scores and notes.
    """
    __tablename__ = 'tasting'
    _s_collection_name = 'Tasting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    wine_id = Column(ForeignKey('wine.id'))
    date = Column(Date, nullable=False)
    score = Column(Integer)
    notes = Column(String(255))

    # parent relationships (access parent)
    wine : Mapped["Wine"] = relationship(back_populates=("TastingList"))

    # child relationships (access children)
    TasterTastingList : Mapped[List["TasterTasting"]] = relationship(back_populates="tasting")
    TastingEventList : Mapped[List["TastingEvent"]] = relationship(back_populates="tasting")
    TastingNoteList : Mapped[List["TastingNote"]] = relationship(back_populates="tasting")
    WineTastingList : Mapped[List["WineTasting"]] = relationship(back_populates="tasting")



class VineyardWine(SAFRSBaseX, Base):
    """
    description: This table creates a many-to-many relationship between vineyards and wines.
    """
    __tablename__ = 'vineyard_wine'
    _s_collection_name = 'VineyardWine'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vineyard_id = Column(ForeignKey('vineyard.id'))
    wine_id = Column(ForeignKey('wine.id'))

    # parent relationships (access parent)
    vineyard : Mapped["Vineyard"] = relationship(back_populates=("VineyardWineList"))
    wine : Mapped["Wine"] = relationship(back_populates=("VineyardWineList"))

    # child relationships (access children)



class WineReview(SAFRSBaseX, Base):
    """
    description: This table stores reviews made by tasters for each wine.
    """
    __tablename__ = 'wine_review'
    _s_collection_name = 'WineReview'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    wine_id = Column(ForeignKey('wine.id'))
    taster_id = Column(ForeignKey('taster.id'))
    review = Column(String(255))
    rating = Column(Integer)

    # parent relationships (access parent)
    taster : Mapped["Taster"] = relationship(back_populates=("WineReviewList"))
    wine : Mapped["Wine"] = relationship(back_populates=("WineReviewList"))

    # child relationships (access children)



class TasterTasting(SAFRSBaseX, Base):
    """
    description: This table links tasters to the tastings they have performed.
    """
    __tablename__ = 'taster_tasting'
    _s_collection_name = 'TasterTasting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    taster_id = Column(ForeignKey('taster.id'))
    tasting_id = Column(ForeignKey('tasting.id'))

    # parent relationships (access parent)
    taster : Mapped["Taster"] = relationship(back_populates=("TasterTastingList"))
    tasting : Mapped["Tasting"] = relationship(back_populates=("TasterTastingList"))

    # child relationships (access children)



class TastingEvent(SAFRSBaseX, Base):
    """
    description: This table maps tastings to events they belong to.
    """
    __tablename__ = 'tasting_event'
    _s_collection_name = 'TastingEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tasting_id = Column(ForeignKey('tasting.id'))
    event_id = Column(ForeignKey('event.id'))

    # parent relationships (access parent)
    event : Mapped["Event"] = relationship(back_populates=("TastingEventList"))
    tasting : Mapped["Tasting"] = relationship(back_populates=("TastingEventList"))

    # child relationships (access children)



class TastingNote(SAFRSBaseX, Base):
    """
    description: This table allows for detailed notes about each tasting session.
    """
    __tablename__ = 'tasting_note'
    _s_collection_name = 'TastingNote'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tasting_id = Column(ForeignKey('tasting.id'), nullable=False)
    note = Column(String(255), nullable=False)

    # parent relationships (access parent)
    tasting : Mapped["Tasting"] = relationship(back_populates=("TastingNoteList"))

    # child relationships (access children)



class WineTasting(SAFRSBaseX, Base):
    """
    description: This table associates wines with their tastings.
    """
    __tablename__ = 'wine_tasting'
    _s_collection_name = 'WineTasting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    wine_id = Column(ForeignKey('wine.id'))
    tasting_id = Column(ForeignKey('tasting.id'))

    # parent relationships (access parent)
    tasting : Mapped["Tasting"] = relationship(back_populates=("WineTastingList"))
    wine : Mapped["Wine"] = relationship(back_populates=("WineTastingList"))

    # child relationships (access children)
