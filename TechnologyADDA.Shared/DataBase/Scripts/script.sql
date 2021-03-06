USE [TechnologyAdda]
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteMainSkill]    Script Date: 10/10/2020 11:24:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_DeleteMainSkill]
(
@Id INT
)
AS
BEGIN
	UPDATE [dbo].[MainSkill] SET Active = 0
END

GO
/****** Object:  StoredProcedure [dbo].[sp_GetMainSkill]    Script Date: 10/10/2020 11:24:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROC [dbo].[sp_GetMainSkill]
AS
BEGIN
	SELECT * FROM [dbo].[MainSkill]
END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertMainSkill]    Script Date: 10/10/2020 11:24:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROC [dbo].[sp_InsertMainSkill]
(
@MainSkillName VARCHAR(160),
@MainSkillDesctiption VARCHAR(500),
@Active BIT
)
AS
BEGIN
	INSERT INTO [dbo].[MainSkill]([SkillName],[SkillDescription],[Active]) 
	VALUES(@MainSkillName,@MainSkillDesctiption,@Active)
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdaateMainSkill]    Script Date: 10/10/2020 11:24:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_UpdaateMainSkill]
(
@MainSkillName VARCHAR(160),
@MainSkillDesctiption VARCHAR(500),
@Active BIT
)
AS
BEGIN
	UPDATE [dbo].[MainSkill] SET [SkillName] = @MainSkillName
END
GO
